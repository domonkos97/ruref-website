package com.ruref.application.model;

import javax.xml.stream.Location;
import java.time.LocalDateTime;
import java.util.List;

public class EventModel {
    private LocalDateTime startOfEvent;
    private LocalDateTime endOfEvent;
    private Location location;
    private List<String> attendees;    // list of email of users who attends
    private String[] recurrence;    // e.g. new String[] {RRULE:FREQ=DAILY;COUNT=2}
    private int reminderMinutesBefore;
    private String description;
}
