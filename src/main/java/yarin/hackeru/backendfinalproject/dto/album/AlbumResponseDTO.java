package yarin.hackeru.backendfinalproject.dto.album;

import lombok.Data;
import lombok.NoArgsConstructor;
import yarin.hackeru.backendfinalproject.dto.song.SongResponseDTO;

import java.util.Set;

@Data
@NoArgsConstructor
public class AlbumResponseDTO {

    private Long id;

    private String albumTitle;

    private String albumReleased;

    private String length;

    private String albumImageUrl;

    private Set<SongResponseDTO> songs;
}
