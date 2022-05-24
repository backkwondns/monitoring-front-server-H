# Jetson Nano Monitoring( Embedded Device)

진행: 완료
태그: Docker, Back-End, Express, Front-End, Mobx, Node.JS, React.JS, Redis, TypeScript

# Jetson Nano (Embedded Device) 모니터링

## 개인 프로젝트

### 0. **Jetson Nano란?**

![Untitled](Jetson%20Nano%20Monitoring(%20Embedded%20Device)%20b12ede5fc821430096198a0d0472968b/Untitled.png)

NVIDIA사에서 생산한 임베디드 장비(ex. 라즈베리 파이)

NVIDIA GPU를 기본 장착하여 고성능 컴퓨팅(ML)이 가능

라즈베리파이와의 성능 비교

![Untitled](Jetson%20Nano%20Monitoring(%20Embedded%20Device)%20b12ede5fc821430096198a0d0472968b/Untitled%201.png)

출처 [https://m.blog.naver.com/icbanq/222146747654](https://m.blog.naver.com/icbanq/222146747654)

## 1. 개발 동기 및 목표

개발 동기

- Kubernetes 프로젝트를 끝내고 남은 Jetson Nano을 활용한 프로젝트 구상
- 기존 해당 장비의 메모리, 온도 등을 확인하기 위해 SSH로 접속 후 확인
- 해당 과정을 간략화 위해 장비 리소스를 웹 페이지를 통해 제공

개발 목표

- 해당 장비의 리소스 데이터를 그래프를 통한 시각화
- 장비의 쿨러를 해당 프로젝트의 산출물 웹 페이지에서 제어
- MongoDB만 사용하던 DB를 처음 사용하는 Redis DB로 개발

---

## 2. 결과물

기본 대시보드

![Untitled](Jetson%20Nano%20Monitoring(%20Embedded%20Device)%20b12ede5fc821430096198a0d0472968b/Untitled%202.png)

---

설정 페이지

![Untitled](Jetson%20Nano%20Monitoring(%20Embedded%20Device)%20b12ede5fc821430096198a0d0472968b/Untitled%203.png)

---

필터링 후 대시보드

![Untitled](Jetson%20Nano%20Monitoring(%20Embedded%20Device)%20b12ede5fc821430096198a0d0472968b/Untitled%204.png)

---

필터링 & 순서 변경 후 대시보드

![Untitled](Jetson%20Nano%20Monitoring(%20Embedded%20Device)%20b12ede5fc821430096198a0d0472968b/Untitled%205.png)

---

로그인 후 쿨러 속도 조절 활성화

![Untitled](Jetson%20Nano%20Monitoring(%20Embedded%20Device)%20b12ede5fc821430096198a0d0472968b/Untitled%206.png)

---

## 3. 디렉토리 구조

- src (React)
    - atoms
        
        button.tsx
        
        checkBox.tsx
        
        formControl.tsx
        
        inputText.tsx
        
        list.tsx
        
        listItem.tsx
        
        index.ts
        
        ...
        
    - libs
        
        axios.ts
        
        index.ts
        
    - organisms
        
        formCheckBox.tsx
        
        lineChart.tsx
        
        listButton.tsx
        
        index.ts
        
    - interface
        
        atoms.interface.ts
        
        organisms.interface.ts
        
        libs.interface.ts
        
        appLayout.interface.ts
        
        dashBoard.interface.ts
        
        login.interface.ts
        
        setting.interface.ts
        
        index.ts
        
    - pages
        - appLayout
            - appHead
                
                appHead.container.tsx
                
                appHead.tsx
                
            - appSide
                
                appSide.container.tsx
                
                appSide.tsx
                
            
            appLayout.tsx
            
        - dashBoard
            
            dashBoard.container.tsx
            
            dashBoard.tsx
            
        - setting
            - fan
                
                fanControl.container.tsx
                
                fanControl.tsx
                
            - list
                
                listSetting.container.tsx
                
                listSetting.tsx
                
            - select
                
                select.container.tsx
                
                select.tsx
                
            
            setting.tsx
            
        
        index.ts
        
    - stores
        
        appLayout.store.ts
        
        dashBoard.store.ts
        
        setting.store.ts
        
        root.store.ts
        
- server(Express)
    - libs
        
        common.js
        
        fromDB.js
        
        toDB.js
        
        storeInfo.js
        
        aggregateInfo.js
        
        configFan.js
        
        - getData
            
            CPU.js
            
            MEM.js
            
            fan.js
            
            temp.js
            
        - redis
            
            connect.js
            
            get.js
            
            set.js
            
    - routes
        
        monitoring.js
        
        login.js
        
    
    server.js
    

---

## 4. DB 구조 (Redis)

- [LIST]
    
    CPU_Avg
    
    CPU_Core0
    
    CPU_Core1
    
    CPU_Core2
    
    CPU_Core3
    
    MEM_Total
    
    ...
    
    timeStamp
    
- [HASH]
    
    ${ID} → 패스워드, 표기할 리소스 목록
    
    ![Untitled](Jetson%20Nano%20Monitoring(%20Embedded%20Device)%20b12ede5fc821430096198a0d0472968b/Untitled%207.png)
    
- [SORTED SET]
    
    ${ID}_LIST → 리소스 순서 (0부터 시작, 999 시 미 표기)
    
    ![Untitled](Jetson%20Nano%20Monitoring(%20Embedded%20Device)%20b12ede5fc821430096198a0d0472968b/Untitled%208.png)
    

---

## 5. 한계점

- 로컬에서 동작시 모든 기능이 가능하나 Docker로 Container등록 시 쿨러 속도 변경이 불가
- 쿨러 속도를 변경하기 위해 ‘/sys/devices/pwm-fan/target_pwm’ 파일을 변경해야 함
- Docker에서 동작시 해당 파일에 대한 권한이 없어 에러 발생

 

---

## 6. 문제 해결 시도

- 해당 파일을 Container 내부 저장소와 연동하여 시도 → Container 생성 시 에러
- ...