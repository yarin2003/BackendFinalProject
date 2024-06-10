package yarin.hackeru.backendfinalproject.service.song;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import yarin.hackeru.backendfinalproject.dto.song.*;
import yarin.hackeru.backendfinalproject.entity.Song;
import yarin.hackeru.backendfinalproject.error.PaginationException;
import yarin.hackeru.backendfinalproject.error.ResourceNotFoundException;
import yarin.hackeru.backendfinalproject.repository.SongRepository;
import yarin.hackeru.backendfinalproject.service.album.AlbumService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SongServiceImpl implements SongService {

    private final SongRepository songRepository;

    private final AlbumService albumService;

    private final ModelMapper modelMapper;

    //add
    @Override
    public SongResponseDTO addSong(long albumId, SongRequestDTO request) {

        var album = albumService.getAlbumEntityByIdOrElseThrow(albumId);

        var song = modelMapper.map(request, Song.class);

        song.setAlbum(album);

        var saved = songRepository.save(song);

        return modelMapper.map(saved, SongResponseDTO.class);
    }

    //getAll
    @Override
    public SongListDTO getAllSongs(int pageNo, int pageSize, String sortDir, String... sortBy) {
        try{
            Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.Direction.fromString(sortDir), sortBy);

            Page<Song> pages = songRepository.findAll(pageable);

            if (pageNo >= pages.getTotalPages()){
                throw new PaginationException("Page Number " + pageNo + "Exceeds totalPages " + pages.getTotalPages());
            }

            List<SongResponseDTO> songList =
                    pages.getContent().stream()
                            .map(a-> modelMapper.map(a, SongResponseDTO.class))
                            .toList();

            return new SongListDTO(
                    pages.getTotalElements(),
                    pages.getNumber(),
                    pages.getSize(),
                    pages.getTotalPages(),
                    pages.isFirst(),
                    pages.isLast(),
                    songList
            );
        }catch (IllegalArgumentException e){
            throw new PaginationException(e.getMessage());
        }
    }

    //getAll by album id
    @Override
    public SongListDTO getSongsByAlbumId(long albumId, int pageNo, int pageSize, String sortDir, String... sortBy) {

        albumService.getAlbumEntityByIdOrElseThrow(albumId);

        try {
            Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.Direction.fromString(sortDir), sortBy);

            Page<Song> pages = songRepository.findAll(pageable);

            if (pageNo >= pages.getTotalPages()) {
                throw new PaginationException("Page Number " + pageNo + "Exceeds totalPages " + pages.getTotalPages());
            }

            List<SongResponseDTO> songList =
                songRepository.findSongsByAlbumId(albumId, pageable)
                        .stream().map(
                              s ->  modelMapper.map(s, SongResponseDTO.class)
                        )
                        .toList();

            return new SongListDTO(
                    pages.getTotalElements(),
                    pages.getNumber(),
                    pages.getSize(),
                    pages.getTotalPages(),
                    pages.isFirst(),
                    pages.isLast(),
                    songList
            );

        }catch (IllegalArgumentException e){
            throw new PaginationException(e.getMessage());
        }
    }

    @Override
    public List<SongResponseDTO> getSongsByName(String name) {
        if (name.isEmpty())
            return new ArrayList<>();
        try {

            Collection<Song> songs = songRepository.findSongsBySongTitleContainingIgnoreCase(name);

            return songs.stream().map(
                    s -> modelMapper.map(s, SongResponseDTO.class)
            ).toList();

        }catch (ResourceNotFoundException e){
            throw new ResourceNotFoundException("song", "song title", name);
        }
    }

    //update
    @Override
    public SongResponseDTO updateSong(long id, SongRequestDTO request) {

         var song = getSongEntityByIdOrElseThrow(id);

         song.setSongTitle(request.getSongTitle());
         song.setSongReleased(request.getSongReleased());
         song.setGenres(request.getGenres());
         song.setLength(request.getLength());
         song.setLabel(request.getLabel());
         song.setSongWriters(request.getSongWriters());
         song.setProducers(request.getProducers());
         song.setSongImageUrl(request.getSongImageUrl());

         var saved = songRepository.save(song);

         return modelMapper.map(saved, SongResponseDTO.class);
    }

    //delete
    @Override
    public DeleteSongResponseDTO deleteSong(long id) {

        var song = songRepository.findById(id);

        songRepository.deleteById(id);

        return DeleteSongResponseDTO.builder()
                .deleted(song.isPresent())
                .song(modelMapper.map(song, SongResponseDTO.class))
                .build();
    }

    public Song getSongEntityByIdOrElseThrow(long id) {
        return songRepository.findById(id).orElseThrow(
                ResourceNotFoundException.newInstance("song", "id", id)
        );
    }
}
