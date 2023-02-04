package com.ruref.application.model;

import com.ruref.application.helpers.EventLocation;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Setter
@Getter@AllArgsConstructor
@NoArgsConstructor
public class EventModel {
    @Id
    @GeneratedValue
    private long id;
    private LocalDateTime startOfEvent;
    private LocalDateTime endOfEvent;

    @OneToOne
    private EventLocation location;
    @ElementCollection
    private List<String> attendees;    // list of email of users who attends
    @ElementCollection
    private List<String> recurrence;    // e.g. new String[] {RRULE:FREQ=DAILY;COUNT=2}
    private int reminderMinutesBefore;
    private String description;

}


