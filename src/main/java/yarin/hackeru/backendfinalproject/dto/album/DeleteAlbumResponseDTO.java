package yarin.hackeru.backendfinalproject.dto.album;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DeleteAlbumResponseDTO {

    private boolean deleted;

    private AlbumResponseDTO album;
}
