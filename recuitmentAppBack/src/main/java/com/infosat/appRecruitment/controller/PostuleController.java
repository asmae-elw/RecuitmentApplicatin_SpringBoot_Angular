package com.infosat.appRecruitment.controller;


import com.infosat.appRecruitment.model.PostuleInfos;
import com.infosat.appRecruitment.security.service.PostuleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/PostulerInfos")
public class PostuleController {


    private final PostuleService postuleService;


    public PostuleController (PostuleService postuleService) {

        this.postuleService = postuleService;
    }

    @GetMapping("/allPostuleInfos")
    public ResponseEntity<List<PostuleInfos>> getAllPostInfos () {
        List<PostuleInfos> infos = postuleService.findAllPostInfos();
        return new ResponseEntity<>(infos, HttpStatus.OK);
    }

    @GetMapping("/findPostInfos/{id}")
    public ResponseEntity<PostuleInfos> getPostInfosById (@PathVariable("id") Long id) {
        PostuleInfos postuleInfos = postuleService.findPostuleInfosById(id);
        return new ResponseEntity<>(postuleInfos, HttpStatus.OK);
    }

    @PostMapping("/addPostuleInfos")
    public ResponseEntity<PostuleInfos> addPostuleInfos(@RequestBody PostuleInfos postuleInfos) {
        PostuleInfos newPostuleInfos = postuleService.addPostuleInfos(postuleInfos);
        return new ResponseEntity<>(newPostuleInfos, HttpStatus.CREATED);
    }
}