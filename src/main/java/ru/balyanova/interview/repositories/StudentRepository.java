package ru.balyanova.interview.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.balyanova.interview.entities.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
