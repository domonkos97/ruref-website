package com.ruref.application.helpers;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class EventLocation {
    @Id
    private String country;
    private String city;
    private String zipCode;
    private String street;
    private String houseNumber;
    private String doorNumber; // optional
}
