package com.ruref.application.repository;

import com.ruref.application.model.EventModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface EventRepository extends JpaRepository<EventModel, Long> {
}
