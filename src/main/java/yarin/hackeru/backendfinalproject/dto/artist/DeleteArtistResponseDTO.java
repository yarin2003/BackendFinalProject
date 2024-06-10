package yarin.hackeru.backendfinalproject.dto.artist;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DeleteArtistResponseDTO {

    private boolean deleted;

    private ArtistResponseDTO artist;
}
