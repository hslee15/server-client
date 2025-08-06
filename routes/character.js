const express = require("express")
const router = express.Router()

let character = require("../models/characterModel")
const characters = require("../models/characterModel")

router.get("/",(req,res)=>{
    try {
        res.status(200).json({message:"전체 캐릭터 가져오기"})
    } catch (error) {
        res.status(500).json({message:"서버 오류",error})
    }
})

router.get("/:id",(req,res)=>{
    try {
        const characterId = Number(req.params.id)
        const character = characters.find(c=>c.id===characterId)

        if(!character){
            res.status(400).json({message:"캐릭터 없음"})
        }

        res.status(200).json({message:"1개 캐릭터 가져오기",character})
    } catch (error) {
        res.status(500).json({message:"서버 오류",error})
    }
})

router.post("/",(req,res)=>{
    try {
        const {name, level, isOnline} = req.body

        if(!name || typeof level !=='number'){
            return res.status(400).json({message:"name, level은 필수 입력"})
        }

        const newChar = {
            id: Date.now(),
            name,
            level,
            isOnline: isOnline ?? false //빈값인 경우는 null일때   false
        }
        characters.push(newChar)

        return res.status(200).json({message:"1개 캐릭터 가져오기",character})
    } catch (error) {
        res.status(500).json({message:"서버 오류",error})
    }
})

router.put("/:id",(req,res)=>{
    try {
        const characterId = Number(req.params.id)
        const index = characters.find(c=>c.id===characterId)

        if(index === -1){
            res.status(400).json({message:"캐릭터 없음"})
        }

        const {name, level, isOnline} = req.body

        if(!name || typeof level !=='number'){
            return res.status(400).json({message:"name, level은 필수 입력"})
        }

        characters[index]={
            ...characters[index],
            name,
            level,
            isOnline: isOnline ?? false
        }
        res.status(200).json({message:"1개 캐릭터 가져오기",character:characters[index] })
    } catch (error) {
        res.status(500).json({message:"서버 오류",error})
    }
})

router.delete("/:id",(req,res)=>{
    try {
        const characterId = Number(req.params.id)
        const index = characters.find(c=>c.id===characterId)

        if(index === -1){
            res.status(400).json({message:"캐릭터 없음"})
        }

        characters.splice(index,1)
        res.status(200).json({message:"캐릭터 삭제하기",character })
    } catch (error) {
        res.status(500).json({message:"서버 오류",error})
    }
})

module.exports = router