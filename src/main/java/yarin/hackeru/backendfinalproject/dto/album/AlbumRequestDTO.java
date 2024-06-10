package yarin.hackeru.backendfinalproject.dto.album;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AlbumRequestDTO {

    @NotNull
    @Size(min = 2, max = 40)
    private String albumTitle;

    @NotNull
    @Size(min = 4, max = 20)
    private String albumReleased;

    @NotNull
    @Size(min = 5, max = 5, message = "size must be 5")
    private String length;

    @NotNull
    @Size(min = 10, max = 500)
    private String albumImageUrl;
}
