package yarin.hackeru.backendfinalproject.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import yarin.hackeru.backendfinalproject.entity.Song;

import java.util.Collection;
import java.util.List;

public interface SongRepository  extends JpaRepository<Song, Long> {

    List<Song> findSongsByAlbumId(long albumId, Pageable pageable);

    Collection<Song> findSongsBySongTitleContainingIgnoreCase(String name);
}
