package org.javaboy.vhr.controller.salary;

import org.javaboy.vhr.model.Salary;
import org.javaboy.vhr.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/salary/table")
public class SalaryTableController {

    @Autowired
    SalaryService salaryService;

    @GetMapping("/")
    public List<Salary> getSalaries() {
        return salaryService.getSalaries();
    }

    @GetMapping("/getByDep/{departmentId}")
    public List<Salary> getSalaryByDep(@PathVariable Integer departmentId) {
        return salaryService.getSalaryByDep(departmentId);
    }
}
