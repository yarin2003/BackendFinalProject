package yarin.hackeru.backendfinalproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import yarin.hackeru.backendfinalproject.entity.Artist;

import java.util.Collection;


@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {
    Collection<Artist> findArtistsByNameContainingIgnoreCase(String name);
}
