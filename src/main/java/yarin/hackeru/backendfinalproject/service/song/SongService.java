package yarin.hackeru.backendfinalproject.service.song;

import yarin.hackeru.backendfinalproject.dto.song.DeleteSongResponseDTO;
import yarin.hackeru.backendfinalproject.dto.song.SongListDTO;
import yarin.hackeru.backendfinalproject.dto.song.SongRequestDTO;
import yarin.hackeru.backendfinalproject.dto.song.SongResponseDTO;
import yarin.hackeru.backendfinalproject.entity.Song;

import java.util.Collection;


public interface SongService {

    //add
    SongResponseDTO addSong(long albumId, SongRequestDTO request);

    //getAll
    SongListDTO getAllSongs(int pageNo, int pageSize, String sortDir, String... sortBy);

    //getAll by album id
    SongListDTO getSongsByAlbumId(long albumId, int pageNo, int pageSize, String sortDir, String... sortBy);

    //get by id
//    SongResponse getSongById(long id);

    //get by name
    Collection<SongResponseDTO> getSongsByName(String name);

    //upsert
    SongResponseDTO updateSong(long id, SongRequestDTO request);

    //delete
    DeleteSongResponseDTO deleteSong(long id);

    Song getSongEntityByIdOrElseThrow(long id);
}
