package yarin.hackeru.backendfinalproject.dto.song;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SongResponseDTO {

    private Long id;

    private String songTitle;

    private String songReleased;

    private String genres;

    private String length;

    private String label;

    private String songWriters;

    private String producers;

    private String songImageUrl;
}
