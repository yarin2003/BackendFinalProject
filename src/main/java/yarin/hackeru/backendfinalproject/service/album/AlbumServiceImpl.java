package yarin.hackeru.backendfinalproject.service.album;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import yarin.hackeru.backendfinalproject.dto.album.AlbumListDTO;
import yarin.hackeru.backendfinalproject.dto.album.AlbumRequestDTO;
import yarin.hackeru.backendfinalproject.dto.album.AlbumResponseDTO;
import yarin.hackeru.backendfinalproject.dto.album.DeleteAlbumResponseDTO;
import yarin.hackeru.backendfinalproject.entity.Album;
import yarin.hackeru.backendfinalproject.error.PaginationException;
import yarin.hackeru.backendfinalproject.error.ResourceNotFoundException;
import yarin.hackeru.backendfinalproject.repository.AlbumRepository;
import yarin.hackeru.backendfinalproject.service.artist.ArtistService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AlbumServiceImpl implements AlbumService {

    private final AlbumRepository albumRepository;

    private final ArtistService artistService;

    private final ModelMapper modelMapper;

    //add
    @Override
    public AlbumResponseDTO addAlbum(long artistId, AlbumRequestDTO request) {

        var artist = artistService.getArtistEntityByIdOrElseThrow(artistId);

        var album = modelMapper.map(request, Album.class);

        album.setArtist(artist);

        var saved = albumRepository.save(album);

        return modelMapper.map(saved, AlbumResponseDTO.class);
    }

    @Override
    public AlbumListDTO getAllAlbums(int pageNo, int pageSize, String sortDir, String... sortBy) {
        try {
            Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.Direction.fromString(sortDir), sortBy);

            Page<Album> pages = albumRepository.findAll(pageable);

            if (pageNo >= pages.getTotalPages()){
                throw new PaginationException("Page Number " + pageNo + "Exceeds totalPages " + pages.getTotalPages());
            }

            List<AlbumResponseDTO> albumList =
                    pages.getContent().stream()
                            .map(a-> modelMapper.map(a, AlbumResponseDTO.class))
                            .toList();

            return new AlbumListDTO(
                    pages.getTotalElements(),
                    pages.getNumber(),
                    pages.getSize(),
                    pages.getTotalPages(),
                    pages.isFirst(),
                    pages.isLast(),
                    albumList
            );

        }catch (IllegalArgumentException e){
            throw new PaginationException(e.getMessage());
        }
    }

    @Override
    public List<AlbumResponseDTO> getAlbumsByName(String name) {
        if (name.isEmpty())
            return new ArrayList<>();
        try {
            Collection<Album> albums = albumRepository.findAlbumsByAlbumTitleContainingIgnoreCase(name);

            return albums.stream().map(
                    a -> modelMapper.map(a, AlbumResponseDTO.class)
            ).toList();

        }catch (ResourceNotFoundException e){
            throw new ResourceNotFoundException("album", "album title", name);
        }
    }

    //getAll
    @Override
    public AlbumListDTO getAlbumsByArtistId(long artistId, int pageNo, int pageSize, String sortDir, String... sortBy) {

        artistService.getArtistEntityByIdOrElseThrow(artistId);

        try {
            Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.Direction.fromString(sortDir), sortBy);

            Page<Album> pages = albumRepository.findAll(pageable);

            if (pageNo >= pages.getTotalPages()){
                throw new PaginationException("Page Number " + pageNo + "Exceeds totalPages " + pages.getTotalPages());
            }

            List<AlbumResponseDTO> albumList =
                    albumRepository.findAlbumsByArtistId(artistId, pageable)
                            .stream().map(
                                    a -> modelMapper.map(a, AlbumResponseDTO.class)
                            )
                            .toList();

            return new AlbumListDTO(
              pages.getTotalElements(),
              pages.getNumber(),
              pages.getSize(),
              pages.getTotalPages(),
              pages.isFirst(),
              pages.isLast(),
              albumList
            );

        } catch (IllegalArgumentException e){
            throw new PaginationException(e.getMessage());
        }
    }

    //update
    @Override
    public AlbumResponseDTO updateAlbum(long id, AlbumRequestDTO request) {

        var album = getAlbumEntityByIdOrElseThrow(id);

        album.setAlbumTitle(request.getAlbumTitle());
        album.setAlbumReleased(request.getAlbumReleased());
        album.setLength(request.getLength());
        album.setAlbumImageUrl(request.getAlbumImageUrl());

        var saved = albumRepository.save(album);

        return modelMapper.map(saved, AlbumResponseDTO.class);
    }

    //delete
    @Override
    public DeleteAlbumResponseDTO deleteAlbum(long id) {

        var album = albumRepository.findById(id);

        albumRepository.deleteById(id);

        return DeleteAlbumResponseDTO.builder()
                .deleted(album.isPresent())
                .album(modelMapper.map(album, AlbumResponseDTO.class))
                .build();
    }

    public Album getAlbumEntityByIdOrElseThrow(long id) {
        return albumRepository.findById(id).orElseThrow(
                ResourceNotFoundException.newInstance("album", "id", id)
        );
    }
}
