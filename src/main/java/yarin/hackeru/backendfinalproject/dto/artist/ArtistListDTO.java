package yarin.hackeru.backendfinalproject.dto.artist;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArtistListDTO {

    private long totalArtists;
    private int pageNo;
    private int pageSize;
    private int totalPages;

    private boolean isFirst;
    private boolean isLast;
    private Collection<ArtistResponseDTO> artists;
}
