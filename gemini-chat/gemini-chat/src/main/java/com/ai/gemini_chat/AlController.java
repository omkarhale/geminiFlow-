package com.ai.gemini_chat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/qna")

public class AlController {

    private final QnAService qnAService;
    public AlController(QnAService qnAService) {
        this.qnAService = qnAService;
    }
     @PostMapping("/ask")
    ResponseEntity<String>askQuestion(@RequestBody Map<String,String>payload){
       String question=payload.get("question");
       String answer=qnAService.getAnswer(question);
       return ResponseEntity.ok(answer);
   }
}
