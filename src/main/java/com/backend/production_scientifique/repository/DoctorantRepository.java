package com.backend.production_scientifique.repository;

import com.backend.production_scientifique.models.Doctorant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorantRepository extends JpaRepository<Doctorant,Long> {

}
