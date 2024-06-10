package yarin.hackeru.backendfinalproject.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import yarin.hackeru.backendfinalproject.entity.Album;

import java.util.Collection;
import java.util.List;

public interface AlbumRepository extends JpaRepository<Album, Long> {

    List<Album> findAlbumsByArtistId(long artistId, Pageable pageable);

    Collection<Album> findAlbumsByAlbumTitleContainingIgnoreCase(String name);
}
