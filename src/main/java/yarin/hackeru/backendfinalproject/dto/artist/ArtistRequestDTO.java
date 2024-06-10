package yarin.hackeru.backendfinalproject.dto.artist;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ArtistRequestDTO {

    @NotNull
    @Size(min = 2, max = 30)
    private String name;

    @NotNull
    @Size(min = 4, max = 10)
    private String birthDate;

    @NotNull
    @Size(min = 2, max = 20)
    private String countryOfBirth;

    @NotNull
    @Size(min = 4, max = 4, message = "start year must contain exactly 4 numbers")
    private String startYear;

    @NotNull
    @Size(min = 4, max = 7, message = "end year must contain 4 till 7 chars")
    private String endYear;

    @NotNull
    @Size(min = 10, max = 500)
    private String artistImageUrl;
}
