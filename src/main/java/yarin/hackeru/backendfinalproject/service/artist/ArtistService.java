package yarin.hackeru.backendfinalproject.service.artist;

import yarin.hackeru.backendfinalproject.dto.artist.*;
import yarin.hackeru.backendfinalproject.entity.Artist;

import java.util.Collection;

public interface ArtistService {
    //add
    ArtistResponseDTO addArtist(ArtistRequestDTO request);

    //getAll
    ArtistListDTO getAllArtists(int pageNo, int pageSize, String sortDir, String... sortBy);

    //get by id
    ArtistResponseDTO getArtistById(long id);

    //get by name
    Collection<ArtistResponseDTO> getArtistsByName(String name);

    //upsert
    ArtistResponseDTO updateArtist(long id, ArtistRequestDTO request);

    //delete
    DeleteArtistResponseDTO deleteArtist(long id);

    Artist getArtistEntityByIdOrElseThrow(long id);
}
