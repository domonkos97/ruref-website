package com.ruref.application.helpers;

import jakarta.persistence.Entity;

@Entity
public class EventLocation {
    private String country;
    private String city;
    private String zipCode;
    private String street;
    private String houseNumber;
    private String doorNumber; // optional
}
