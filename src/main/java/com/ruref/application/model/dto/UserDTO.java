package com.ruref.application.model.dto;

import com.ruref.application.model.AccessType;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDTO {
    private Long id;
    private String email;

    private String name;

    private String accessType;
}
