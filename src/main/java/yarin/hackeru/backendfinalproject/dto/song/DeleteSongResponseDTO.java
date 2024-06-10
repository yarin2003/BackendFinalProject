package yarin.hackeru.backendfinalproject.dto.song;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class DeleteSongResponseDTO {

    private boolean deleted;

    private SongResponseDTO song;
}
