package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Employee;
import com.example.demo.repo.EmployeeRepository;
@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepository employeeRepository;
	
	public List<Employee> getEmployees(){
		return employeeRepository.findAll();
	}
	
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}
	
	public Employee getEmployeeById(String id)
	{
		return employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id Not Found"));
	}
	
	public ResponseEntity<Employee> updateEmployee(String id,Employee employee){
		Employee emp= employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee does not exits..."));
		emp.setId(employee.getId());
		emp.setEmpid(employee.getEmpId());
		emp.setFirstName(employee.getFirstName());
		emp.setLastName(employee.getLastName());
		emp.setEmail(employee.getEmail());
		Employee updateEmp=employeeRepository.save(emp);
		return ResponseEntity.ok(updateEmp);
	}
	public ResponseEntity<HttpStatus> deleteEmployee(String id){
		Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee does not exists...."));
		employeeRepository.delete(employee);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	

}
