package com.mkyong.web.controller;

import com.mkyong.web.model.*;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestWebController {
	
	List<Customer> cust = new ArrayList<Customer>();
	
	@RequestMapping(value = "/getallcustomer", method = RequestMethod.GET)
	public List<Customer> getResource(){
			return cust;
	}
	
	@RequestMapping(value="/postcustomer", method=RequestMethod.POST, headers= "Accept=application/json")
	public Customer postCustomer(@RequestBody Customer customer){
		cust.add(customer);
		System.out.println("cust added");
		return customer;
	}  
}