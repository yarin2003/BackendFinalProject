package yarin.hackeru.backendfinalproject.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = "songTitle"))
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private String songTitle;

    @NotNull
    private String songReleased;

    @NotNull
    private String genres;

    @NotNull
    private String length;

    @NotNull
    private String label;

    @NotNull
    private String songWriters;

    @NotNull
    private String producers;

    @NotNull
    private String songImageUrl;

    @ManyToOne
    @JoinColumn(name = "album_id", nullable = false)
    private Album album;
}
