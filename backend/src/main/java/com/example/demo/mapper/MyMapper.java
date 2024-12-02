package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface MyMapper {
    @Select("SELECT #{value} FROM DUAL")
    String selectWithValue(@Param("value") String value);
}
