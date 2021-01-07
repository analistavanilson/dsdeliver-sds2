package com.analistavanilson.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.analistavanilson.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
