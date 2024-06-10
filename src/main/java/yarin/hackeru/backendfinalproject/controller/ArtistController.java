package yarin.hackeru.backendfinalproject.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import yarin.hackeru.backendfinalproject.dto.artist.*;
import yarin.hackeru.backendfinalproject.service.artist.ArtistServiceImpl;

import java.util.Collection;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/artists")
@Tag(
        name = "Artist Controller",
        description = "artists list"
)
@SecurityRequirement(name = "Bearer Authentication")
public class ArtistController {

    private final ArtistServiceImpl artistService;

    //add
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ArtistResponseDTO> addArtist(@Valid @RequestBody ArtistRequestDTO request,
                                                       UriComponentsBuilder uriBuilder){

        var saved = artistService.addArtist(request);

        var uri = uriBuilder.path("api/v1/artists/{id}")
                        .buildAndExpand(saved.getId())
                        .toUri();

        return ResponseEntity.created(uri).body(saved);
    }

    //getAll
    @GetMapping
    public ResponseEntity<ArtistListDTO> getAllArtists(
            @RequestParam(defaultValue = "0", required = false) int pageNo,
            @RequestParam(defaultValue = "10", required = false) int pageSize,
            @RequestParam(defaultValue = "asc", required = false) String sortDir,
            @RequestParam(defaultValue = "id", required = false) String... sortBy){
        return ResponseEntity.ok(artistService.getAllArtists(pageNo, pageSize, sortDir,sortBy));
    }

    //getById
    @GetMapping("/{id}")
    public ResponseEntity<ArtistResponseDTO> getArtistById(@PathVariable @Valid @NotNull long id){
        return ResponseEntity.ok(artistService.getArtistById(id));
    }

    //getByName
    @GetMapping("/name")
    public ResponseEntity<Collection<ArtistResponseDTO>> getArtistsByName(
            @RequestParam(defaultValue = "", required = false) String name
    ){
        return ResponseEntity.ok(artistService.getArtistsByName(name));
    }

    //upsert
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ArtistResponseDTO> updateArtist(@PathVariable @Valid @NotNull long id,
                                                          @Valid @RequestBody ArtistRequestDTO request){
        return ResponseEntity.ok(artistService.updateArtist(id, request));
    }

    //delete
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DeleteArtistResponseDTO> deleteArtist(@PathVariable @Valid @NotNull long id){
        return ResponseEntity.ok(artistService.deleteArtist(id));
    }
}
