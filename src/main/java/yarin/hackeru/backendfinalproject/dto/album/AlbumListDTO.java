package yarin.hackeru.backendfinalproject.dto.album;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlbumListDTO {

    private long totalAlbums;
    private int pageNo;
    private int pageSize;
    private int totalPages;

    private boolean isFirst;
    private boolean isLast;
    private Collection<AlbumResponseDTO> albums;

}
