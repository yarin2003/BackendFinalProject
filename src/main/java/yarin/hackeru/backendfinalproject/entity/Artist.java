package yarin.hackeru.backendfinalproject.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = "name"))
public class Artist{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String name;

    @NotNull
    private String birthDate;

    @NotNull
    private String countryOfBirth;

    @NotNull
    private String startYear;

    @NotNull
    private String endYear;

    @NotNull
    @Column(length = 500)
    private String artistImageUrl;

    @OneToMany(mappedBy = "artist", cascade = CascadeType.ALL)
    private Set<Album> albums;
}
