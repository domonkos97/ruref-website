package com.ruref.application.model;

import com.ruref.application.helpers.EventLocation;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor

public class EventModel {
    @Id
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

    public EventModel() {
    }
}
