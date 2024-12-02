package com.example.demo.service;

import com.example.demo.mapper.MyMapper;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    private final MyMapper myMapper;

    public MyService(MyMapper myMapper) {
        this.myMapper = myMapper;
    }

    public int getOne() {
        return myMapper.selectOne();
    }
}