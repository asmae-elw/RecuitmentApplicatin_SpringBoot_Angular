package com.infosat.appRecruitment.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class PostuleInfos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long id;
    private String cv;
    private String email;
    private String linkdenUrl;
    private String githunUrl;
    private String societe;
    private String domaineDetude;

    public long getId() {
        return id;
    }

    public String getCv() {
        return cv;
    }

    public String getEmail() {
        return email;
    }

    public String getLinkdenUrl() {
        return linkdenUrl;
    }

    public String getGithunUrl() {
        return githunUrl;
    }

    public String getSociete() {
        return societe;
    }

    public String getDomaineDetude() {
        return domaineDetude;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setCv(String cv) {
        this.cv = cv;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setLinkdenUrl(String linkdenUrl) {
        this.linkdenUrl = linkdenUrl;
    }

    public void setGithunUrl(String githunUrl) {
        this.githunUrl = githunUrl;
    }

    public void setSociete(String societe) {
        this.societe = societe;
    }

    public void setDomaineDetude(String domaineDetude) {
        this.domaineDetude = domaineDetude;
    }

    public PostuleInfos(){

    }

    public PostuleInfos(String cv, String email, String linkdenUrl, String githunUrl, String societe, String domaineDetude) {

        this.cv = cv;
        this.email = email;
        this.linkdenUrl = linkdenUrl;
        this.githunUrl = githunUrl;
        this.societe = societe;
        this.domaineDetude = domaineDetude;

    }
}
