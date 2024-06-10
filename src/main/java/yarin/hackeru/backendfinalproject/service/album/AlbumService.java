package yarin.hackeru.backendfinalproject.service.album;

import yarin.hackeru.backendfinalproject.dto.album.AlbumListDTO;
import yarin.hackeru.backendfinalproject.dto.album.AlbumRequestDTO;
import yarin.hackeru.backendfinalproject.dto.album.AlbumResponseDTO;
import yarin.hackeru.backendfinalproject.dto.album.DeleteAlbumResponseDTO;
import yarin.hackeru.backendfinalproject.entity.Album;

import java.util.Collection;
public interface AlbumService {

    //add
    AlbumResponseDTO addAlbum(long artistId, AlbumRequestDTO request);

    //getAll
    AlbumListDTO getAllAlbums(int pageNo, int pageSize, String sortDir, String... sortBy);

    //get by name
    Collection<AlbumResponseDTO> getAlbumsByName(String name);

    //getAll by artist id
    AlbumListDTO getAlbumsByArtistId(long artistId, int pageNo, int pageSize, String sortDir, String... sortBy);

    //get by id
//    AlbumResponse getAlbumById(long id);

    //upsert
    AlbumResponseDTO updateAlbum(long id, AlbumRequestDTO request);

    //delete
    DeleteAlbumResponseDTO deleteAlbum(long id);

    Album getAlbumEntityByIdOrElseThrow(long id);
}
