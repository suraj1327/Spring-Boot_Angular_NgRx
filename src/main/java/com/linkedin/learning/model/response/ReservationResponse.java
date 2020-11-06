package com.linkedin.learning.model.response;

import com.linkedin.learning.model.Links;

public class ReservationResponse {

	private Long id = Long.valueOf(1);
	private Integer roomNumber = 123;
	private Integer price =1000;
	private Links links;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Integer getRoomNumder() {
		return roomNumber;
	}
	public void setRoomNumder(Integer roomNumder) {
		this.roomNumber = roomNumder;
	}
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
	public ReservationResponse() {
		super();
	}
	public Links getLinks() {
		return links;
	}
	public void setLinks(Links links) {
		this.links = links;
	}
	public ReservationResponse(Integer roomNumder, Integer price) {
		super();
		this.roomNumber = roomNumder;
		this.price = price;
	}
	
}
