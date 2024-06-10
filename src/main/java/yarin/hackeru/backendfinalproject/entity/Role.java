package yarin.hackeru.backendfinalproject.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.*;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = {"name"})})
public class Role {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @NotNull
    @Pattern(regexp = "^ROLE_[A-Z]{1,20}$")
    private String name;
}
