package yarin.hackeru.backendfinalproject.dto.song;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SongRequestDTO {

    @NotNull
    @Size(min = 2, max = 40)
    private String songTitle;

    @NotNull
    @Size(min = 4, max = 20)
    private String songReleased;

    @NotNull
    @Size(min = 2, max = 40)
    private String genres;

    @NotNull
    @Size(min = 4, max = 5)
    private String length;

    @NotNull
    @Size(min = 2, max = 60)
    private String label;

    @NotNull
    @Size(min = 2, max = 150)
    private String songWriters;

    @NotNull
    @Size(min = 2, max = 150)
    private String producers;

    @NotNull
    @Size(min = 10, max = 500)
    private String songImageUrl;
}
