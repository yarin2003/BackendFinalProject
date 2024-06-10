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
import yarin.hackeru.backendfinalproject.dto.album.*;
import yarin.hackeru.backendfinalproject.service.album.AlbumService;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1")
@Tag(
        name = "Album Controller",
        description = "artist albums"
)
@SecurityRequirement(name = "Bearer Authentication")
public class AlbumController {

    private final AlbumService albumService;

    //add
    @PostMapping("/artists/{id}/albums")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AlbumResponseDTO> addAlbum(
            @PathVariable(name = "id") long artistId,
            @Valid @RequestBody AlbumRequestDTO request,
            UriComponentsBuilder uriBuilder){

        var saved = albumService.addAlbum(artistId, request);

        var uri = uriBuilder.path("/artists/{id}/albums").buildAndExpand(saved.getId()).toUri();

        return ResponseEntity.created(uri).body(saved);
    }

    //getAll
    @GetMapping("/albums")
    public ResponseEntity<AlbumListDTO> getAllAlbums(
            @RequestParam(defaultValue = "0", required = false) int pageNo,
            @RequestParam(defaultValue = "10", required = false) int pageSize,
            @RequestParam(defaultValue = "asc", required = false) String sortDir,
            @RequestParam(defaultValue = "id", required = false) String... sortBy){
        return ResponseEntity.ok(albumService.getAllAlbums(pageNo, pageSize, sortDir,sortBy));
    }

    //getAll by artist id
    @GetMapping("/artists/{id}/albums")
    public ResponseEntity<AlbumListDTO> getAlbumsByArtistId(
            @PathVariable(name = "id") long artistId,
            @RequestParam(defaultValue = "0", required = false) int pageNo,
            @RequestParam(defaultValue = "20", required = false) int pageSize,
            @RequestParam(defaultValue = "asc", required = false) String sortDir,
            @RequestParam(defaultValue = "id", required = false) String... sortBy){

        return ResponseEntity.ok(albumService.getAlbumsByArtistId(artistId, pageNo, pageSize, sortDir, sortBy));
    }

    @GetMapping({"/albums/name"})
    public ResponseEntity<Collection<AlbumResponseDTO>> getAlbumsByName(
            @RequestParam(defaultValue = "", required = false) String name){
        return ResponseEntity.ok(albumService.getAlbumsByName(name));
    }

    //upsert
    @PutMapping("/albums/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    @CrossOrigin
    public ResponseEntity<AlbumResponseDTO> updateAlbum(@PathVariable @Valid @NotNull long id,
                                                        @Valid @RequestBody AlbumRequestDTO request){

        return ResponseEntity.ok(albumService.updateAlbum(id, request));
    }

    //delete
    @DeleteMapping("/albums/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DeleteAlbumResponseDTO> deleteAlbum(@PathVariable @Valid @NotNull long id){
        return ResponseEntity.ok(albumService.deleteAlbum(id));
    }
}
