package yarin.hackeru.backendfinalproject.dto.artist;

import lombok.Data;
import lombok.NoArgsConstructor;
import yarin.hackeru.backendfinalproject.dto.album.AlbumResponseDTO;

import java.util.Set;

@Data
@NoArgsConstructor
public class ArtistResponseDTO {

    private Long id;

    private String name;

    private String birthDate;

    private String countryOfBirth;

    private String startYear;

    private String endYear;

    private String artistImageUrl;

    private Set<AlbumResponseDTO> albums;
}
