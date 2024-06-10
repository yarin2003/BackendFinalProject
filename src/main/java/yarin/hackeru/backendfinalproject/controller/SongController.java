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
import yarin.hackeru.backendfinalproject.dto.song.*;
import yarin.hackeru.backendfinalproject.service.song.SongService;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1")
@Tag(
        name = "Song Controller",
        description = "album songs"
)
@SecurityRequirement(name = "Bearer Authentication")
public class SongController {

    private final SongService songService;

    //add
    @PostMapping("/albums/{id}/songs")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<SongResponseDTO> addSong(
                @PathVariable(name = "id") long albumId,
                @RequestBody @Valid SongRequestDTO request,
                UriComponentsBuilder uriBuilder){

        var saved = songService.addSong(albumId, request);

        var uri = uriBuilder.path("/albums/{id}/songs")
                        .buildAndExpand(saved.getId())
                        .toUri();

        return ResponseEntity.created(uri).body(saved);
    }

    //getAll
    @GetMapping("/songs")
    public ResponseEntity<SongListDTO> getAllSongs(
            @RequestParam(defaultValue = "0", required = false) int pageNo,
            @RequestParam(defaultValue = "10", required = false) int pageSize,
            @RequestParam(defaultValue = "asc", required = false) String sortDir,
            @RequestParam(defaultValue = "id", required = false) String... sortBy){
        return ResponseEntity.ok(songService.getAllSongs(pageNo, pageSize, sortDir,sortBy));
    }

    //getAll by album id
    @GetMapping("/albums/{id}/songs")
    public ResponseEntity<SongListDTO> getSongsByAlbumId(
            @Valid @PathVariable(name = "id") long albumId,
            @RequestParam(defaultValue = "0", required = false) int pageNo,
            @RequestParam(defaultValue = "10", required = false) int pageSize,
            @RequestParam(defaultValue = "asc", required = false) String sortDir,
            @RequestParam(defaultValue = "id", required = false) String... sortBy) {
        return ResponseEntity.ok(songService.getSongsByAlbumId(albumId, pageNo, pageSize, sortDir, sortBy));
    }

    //getByName
    @GetMapping("/songs/name")
    public ResponseEntity<Collection<SongResponseDTO>> getSongsByName(
            @RequestParam(defaultValue = "", required = false) String name
    ){
        return ResponseEntity.ok(songService.getSongsByName(name));
    }

    //upsert
    @PutMapping("/songs/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<SongResponseDTO> updateSong(@PathVariable @Valid @NotNull long id,
                                                      @Valid @NotNull @RequestBody SongRequestDTO request){
       return ResponseEntity.ok(songService.updateSong(id, request));
    }

    //delete
    @DeleteMapping("/songs/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<DeleteSongResponseDTO> deleteSong(@PathVariable @Valid @NotNull long id){
        return ResponseEntity.ok(songService.deleteSong(id));
    }
}
