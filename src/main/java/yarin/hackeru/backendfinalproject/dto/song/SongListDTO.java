package yarin.hackeru.backendfinalproject.dto.song;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SongListDTO {

    private long totalSongs;
    private int pageNo;
    private int pageSize;
    private int totalPages;

    private boolean isFirst;
    private boolean isLast;
    private Collection<SongResponseDTO> songs;
}
