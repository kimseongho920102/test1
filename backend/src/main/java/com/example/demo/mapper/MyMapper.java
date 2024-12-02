package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface MyMapper {
    @Select("SELECT 1 FROM DUAL")
    int selectOne();
}
