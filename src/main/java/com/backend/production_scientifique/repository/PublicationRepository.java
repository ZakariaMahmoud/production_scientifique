package com.backend.production_scientifique.repository;

import com.backend.production_scientifique.models.Publication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublicationRepository extends JpaRepository<Publication,Long> {

}
