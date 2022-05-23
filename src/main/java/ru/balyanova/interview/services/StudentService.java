package ru.balyanova.interview.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.balyanova.interview.entities.Student;
import ru.balyanova.interview.repositories.StudentRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public List<Student> showAll() {
        return studentRepository.findAll();
    }

    public Student findById(Long id) {
        return studentRepository.findById(id).get();
    }

    public void deleteById(Long id) {
        studentRepository.deleteById(id);
    }

    @Transactional
    public void update(Student student) {
        Student updatedStudent = studentRepository.findById(student.getId()).get();
        updatedStudent.setName(student.getName());
        updatedStudent.setAge(student.getAge());
    }

    public void save(Student student) {
        studentRepository.save(student);
    }
}
