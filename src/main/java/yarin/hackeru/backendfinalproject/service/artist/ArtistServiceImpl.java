package yarin.hackeru.backendfinalproject.service.artist;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import yarin.hackeru.backendfinalproject.dto.artist.*;
import yarin.hackeru.backendfinalproject.entity.Artist;
import yarin.hackeru.backendfinalproject.error.PaginationException;
import yarin.hackeru.backendfinalproject.error.ResourceNotFoundException;
import yarin.hackeru.backendfinalproject.repository.ArtistRepository;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Service
@RequiredArgsConstructor
public class ArtistServiceImpl implements ArtistService {

    private final ArtistRepository artistRepository;

    private final ModelMapper modelMapper;

    //add
    @Override
    public ArtistResponseDTO addArtist(ArtistRequestDTO request) {

        var artist = modelMapper.map(request, Artist.class);

        var saved = artistRepository.save(artist);

        return modelMapper.map(saved, ArtistResponseDTO.class);
    }

    //getAll
    @Override
    public ArtistListDTO getAllArtists(int pageNo, int pageSize, String sortDir, String... sortBy) {

        try {
            Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.Direction.fromString(sortDir), sortBy);

            Page<Artist> pages = artistRepository.findAll(pageable);

            if (pageNo >= pages.getTotalPages()){
                throw new PaginationException("Page Number " + pageNo + "Exceeds totalPages " + pages.getTotalPages());
            }

            List<ArtistResponseDTO> artistList =
                    pages.getContent().stream()
                    .map(a-> modelMapper.map(a, ArtistResponseDTO.class))
                    .toList();

            return new ArtistListDTO(
                    pages.getTotalElements(),
                    pages.getNumber(),
                    pages.getSize(),
                    pages.getTotalPages(),
                    pages.isFirst(),
                    pages.isLast(),
                    artistList
            );
            
        }catch (IllegalArgumentException e){
            throw new PaginationException(e.getMessage());
        }
    }

    //get by id
    @Override
    public ArtistResponseDTO getArtistById(long id) {

        return modelMapper.map(
                getArtistEntityByIdOrElseThrow(id),
                ArtistResponseDTO.class
        );
    }

    @Override
    public List<ArtistResponseDTO> getArtistsByName(String name) {
        if(name.isEmpty())
            return new ArrayList<>();
        try{
            Collection<Artist> artists = artistRepository.findArtistsByNameContainingIgnoreCase(name);

            return artists.stream().map(
                    a-> modelMapper.map(a, ArtistResponseDTO.class)
            ).toList();

        }catch (ResourceNotFoundException e){
            throw new ResourceNotFoundException("artist", "name", name);
        }
    }

    //update
    @Override
    public ArtistResponseDTO updateArtist(long id, ArtistRequestDTO request) {

        var artist = getArtistEntityByIdOrElseThrow(id);

        artist.setName(request.getName());
        artist.setBirthDate(request.getBirthDate());
        artist.setCountryOfBirth(request.getCountryOfBirth());
        artist.setStartYear(request.getStartYear());
        artist.setEndYear(request.getEndYear());
        artist.setArtistImageUrl(request.getArtistImageUrl());

        var saved = artistRepository.save(artist);

        return modelMapper.map(saved, ArtistResponseDTO.class);
    }

    //delete
    @Override
    public DeleteArtistResponseDTO deleteArtist(long id) {

        var artist = artistRepository.findById(id);

        artistRepository.deleteById(id);

        return DeleteArtistResponseDTO.builder()
                .deleted(artist.isPresent())
                .artist(modelMapper.map(artist, ArtistResponseDTO.class))
                .build();

    }

    public Artist getArtistEntityByIdOrElseThrow(long id){
        return artistRepository.findById(id).orElseThrow(
                ResourceNotFoundException.newInstance("artist", "id", id)
        );
    }
}
