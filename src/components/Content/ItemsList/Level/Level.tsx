import React, { useState } from 'react'

const Level = () => {
   return (
      <div className="item-list__level">
         <div className='level__one'>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2014 14.966V14.2472V14.2312H18.2377C18.6681 14.2312 19.0188 13.8799 19.0188 13.4486V2.31597C19.0188 1.88472 18.6681 1.53333 18.2377 1.53333H9.21449C9.19161 1.46809 9.16873 1.39857 9.14502 1.32651C8.95391 0.745785 8.70848 0 7.97101 0H1.96087C1.53043 0 1.17971 0.351389 1.17971 0.782639V1.83681H0.462319C0.207246 1.83681 0 2.04444 0 2.3V13.4326V14.966C0 15.2215 0.207246 15.4292 0.462319 15.4292H16.7391C16.9942 15.4292 17.2014 15.2215 17.2014 14.966ZM7.49275 3.37014L7.0942 2.3C6.99855 2.06042 6.72754 1.85278 6.48841 1.85278H1.84928V0.798611C1.84928 0.734722 1.8971 0.670833 1.97681 0.670833H7.97101C8.31251 0.670833 8.5336 1.42487 8.67407 1.90397C8.71065 2.02874 8.74177 2.13486 8.76812 2.20417H18.2536C18.3174 2.20417 18.3812 2.25208 18.3812 2.33194V13.4646C18.3812 13.5285 18.3333 13.5924 18.2536 13.5924H17.2014V3.83333C17.2014 3.57778 16.9942 3.37014 16.7391 3.37014H7.49275ZM8.75355 12.7417V5.46893H7.30824L5.50781 6.60885V7.97248L7.1733 6.92845H7.21591V12.7417H8.75355Z" fill="#5F98F5" />
            </svg>
            <svg width="1" height="53" viewBox="0 0 1 53" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="0.5" y1="53" x2="0.499998" y2="2.18557e-08" stroke="#C6C6C6" />
            </svg>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2014 14.966V14.2472V14.2312H18.2377C18.6681 14.2312 19.0188 13.8799 19.0188 13.4486V2.31597C19.0188 1.88472 18.6681 1.53333 18.2377 1.53333H9.21449C9.19161 1.46809 9.16873 1.39857 9.14502 1.32651C8.95391 0.745785 8.70848 0 7.97101 0H1.96087C1.53043 0 1.17971 0.351389 1.17971 0.782639V1.83681H0.462319C0.207246 1.83681 0 2.04444 0 2.3V13.4326V14.966C0 15.2215 0.207246 15.4292 0.462319 15.4292H16.7391C16.9942 15.4292 17.2014 15.2215 17.2014 14.966ZM7.49275 3.37014L7.0942 2.3C6.99855 2.06042 6.72754 1.85278 6.48841 1.85278H1.84928V0.798611C1.84928 0.734722 1.8971 0.670833 1.97681 0.670833H7.97101C8.31251 0.670833 8.5336 1.42487 8.67407 1.90397C8.71065 2.02874 8.74177 2.13486 8.76812 2.20417H18.2536C18.3174 2.20417 18.3812 2.25208 18.3812 2.33194V13.4646C18.3812 13.5285 18.3333 13.5924 18.2536 13.5924H17.2014V3.83333C17.2014 3.57778 16.9942 3.37014 16.7391 3.37014H7.49275ZM5.58946 11.6337V12.7417H10.7741V11.4846H7.72014V11.4348L8.78193 10.3944C9.28145 9.93982 9.66853 9.55038 9.94315 9.22604C10.2178 8.89934 10.4083 8.60222 10.5149 8.33471C10.6238 8.06719 10.6782 7.79612 10.6782 7.5215C10.6782 7.10246 10.5705 6.73078 10.3551 6.40644C10.1396 6.0821 9.8378 5.82879 9.44954 5.6465C9.06365 5.46184 8.61029 5.36951 8.08946 5.36951C7.58283 5.36951 7.13538 5.46539 6.74713 5.65715C6.35887 5.84891 6.05702 6.11998 5.84159 6.47036C5.62615 6.82074 5.51843 7.23385 5.51843 7.70971H6.97795C6.97795 7.4777 7.02293 7.27765 7.11289 7.10956C7.20286 6.94148 7.3307 6.81245 7.49642 6.72249C7.66214 6.63253 7.85626 6.58755 8.0788 6.58755C8.29187 6.58755 8.48245 6.63016 8.65054 6.71539C8.81862 6.79825 8.9512 6.9178 9.04826 7.07405C9.14533 7.22793 9.19386 7.41141 9.19386 7.62448C9.19386 7.81624 9.1548 7.99498 9.07667 8.1607C8.99855 8.32405 8.88373 8.49096 8.73221 8.66141C8.58306 8.83187 8.3984 9.02363 8.17823 9.23669L5.58946 11.6337Z" fill="#95FFAC" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11.5556 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V4.44444L11.5556 0ZM3.55556 3.55556H8V5.33333H3.55556V3.55556ZM12.4444 12.4444H3.55556V10.6667H12.4444V12.4444ZM12.4444 8.88889H3.55556V7.11111H12.4444V8.88889ZM10.6667 5.33333V1.77778L14.2222 5.33333H10.6667Z" fill="#7890B2" />
            </svg>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.5 1C1.23478 1 0.98043 1.10536 0.792893 1.29289C0.605357 1.48043 0.5 1.73478 0.5 2V3C0.5 3.26522 0.605357 3.51957 0.792893 3.70711C0.98043 3.89464 1.23478 4 1.5 4H2V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H10C10.5304 15 11.0391 14.7893 11.4142 14.4142C11.7893 14.0391 12 13.5304 12 13V4H12.5C12.7652 4 13.0196 3.89464 13.2071 3.70711C13.3946 3.51957 13.5 3.26522 13.5 3V2C13.5 1.73478 13.3946 1.48043 13.2071 1.29289C13.0196 1.10536 12.7652 1 12.5 1H9C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0L6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1H1.5ZM4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5V12.5C5 12.6326 4.94732 12.7598 4.85355 12.8536C4.75979 12.9473 4.63261 13 4.5 13C4.36739 13 4.24021 12.9473 4.14645 12.8536C4.05268 12.7598 4 12.6326 4 12.5V5.5C4 5.36739 4.05268 5.24021 4.14645 5.14645C4.24021 5.05268 4.36739 5 4.5 5ZM7 5C7.13261 5 7.25979 5.05268 7.35355 5.14645C7.44732 5.24021 7.5 5.36739 7.5 5.5V12.5C7.5 12.6326 7.44732 12.7598 7.35355 12.8536C7.25979 12.9473 7.13261 13 7 13C6.86739 13 6.74021 12.9473 6.64645 12.8536C6.55268 12.7598 6.5 12.6326 6.5 12.5V5.5C6.5 5.36739 6.55268 5.24021 6.64645 5.14645C6.74021 5.05268 6.86739 5 7 5ZM10 5.5V12.5C10 12.6326 9.94732 12.7598 9.85355 12.8536C9.75979 12.9473 9.63261 13 9.5 13C9.36739 13 9.24021 12.9473 9.14645 12.8536C9.05268 12.7598 9 12.6326 9 12.5V5.5C9 5.36739 9.05268 5.24021 9.14645 5.14645C9.24021 5.05268 9.36739 5 9.5 5C9.63261 5 9.75979 5.05268 9.85355 5.14645C9.94732 5.24021 10 5.36739 10 5.5Z" fill="#DF4444" />
            </svg>
            <div className='one__container'></div>
         </div>
         <div className="level__two">
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2014 14.966V14.2472V14.2312H18.2377C18.6681 14.2312 19.0188 13.8799 19.0188 13.4486V2.31597C19.0188 1.88472 18.6681 1.53333 18.2377 1.53333H9.21449C9.19161 1.46809 9.16873 1.39857 9.14502 1.32651C8.95391 0.745785 8.70848 0 7.97101 0H1.96087C1.53043 0 1.17971 0.351389 1.17971 0.782639V1.83681H0.462319C0.207246 1.83681 0 2.04444 0 2.3V13.4326V14.966C0 15.2215 0.207246 15.4292 0.462319 15.4292H16.7391C16.9942 15.4292 17.2014 15.2215 17.2014 14.966ZM7.49275 3.37014L7.0942 2.3C6.99855 2.06042 6.72754 1.85278 6.48841 1.85278H1.84928V0.798611C1.84928 0.734722 1.8971 0.670833 1.97681 0.670833H7.97101C8.31251 0.670833 8.5336 1.42487 8.67407 1.90397C8.71065 2.02874 8.74177 2.13486 8.76812 2.20417H18.2536C18.3174 2.20417 18.3812 2.25208 18.3812 2.33194V13.4646C18.3812 13.5285 18.3333 13.5924 18.2536 13.5924H17.2014V3.83333C17.2014 3.57778 16.9942 3.37014 16.7391 3.37014H7.49275ZM5.58946 11.6337V12.7417H10.7741V11.4846H7.72014V11.4348L8.78193 10.3944C9.28145 9.93982 9.66853 9.55038 9.94315 9.22604C10.2178 8.89934 10.4083 8.60222 10.5149 8.33471C10.6238 8.06719 10.6782 7.79612 10.6782 7.5215C10.6782 7.10246 10.5705 6.73078 10.3551 6.40644C10.1396 6.0821 9.8378 5.82879 9.44954 5.6465C9.06365 5.46184 8.61029 5.36951 8.08946 5.36951C7.58283 5.36951 7.13538 5.46539 6.74713 5.65715C6.35887 5.84891 6.05702 6.11998 5.84159 6.47036C5.62615 6.82074 5.51843 7.23385 5.51843 7.70971H6.97795C6.97795 7.4777 7.02293 7.27765 7.11289 7.10956C7.20286 6.94148 7.3307 6.81245 7.49642 6.72249C7.66214 6.63253 7.85626 6.58755 8.0788 6.58755C8.29187 6.58755 8.48245 6.63016 8.65054 6.71539C8.81862 6.79825 8.9512 6.9178 9.04826 7.07405C9.14533 7.22793 9.19386 7.41141 9.19386 7.62448C9.19386 7.81624 9.1548 7.99498 9.07667 8.1607C8.99855 8.32405 8.88373 8.49096 8.73221 8.66141C8.58306 8.83187 8.3984 9.02363 8.17823 9.23669L5.58946 11.6337Z" fill="#95FFAC" />
            </svg>
            <svg width="11" height="1" viewBox="0 0 11 1" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line y1="0.5" x2="11" y2="0.5" stroke="#C6C6C6" />
            </svg>
            <svg width="1" height="113" viewBox="0 0 1 113" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line x1="0.5" y1="113" x2="0.500005" y2="-2.18557e-08" stroke="#C6C6C6" />
            </svg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11.5556 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V4.44444L11.5556 0ZM3.55556 3.55556H8V5.33333H3.55556V3.55556ZM12.4444 12.4444H3.55556V10.6667H12.4444V12.4444ZM12.4444 8.88889H3.55556V7.11111H12.4444V8.88889ZM10.6667 5.33333V1.77778L14.2222 5.33333H10.6667Z" fill="#7890B2" />
            </svg>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1.5 1C1.23478 1 0.98043 1.10536 0.792893 1.29289C0.605357 1.48043 0.5 1.73478 0.5 2V3C0.5 3.26522 0.605357 3.51957 0.792893 3.70711C0.98043 3.89464 1.23478 4 1.5 4H2V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H10C10.5304 15 11.0391 14.7893 11.4142 14.4142C11.7893 14.0391 12 13.5304 12 13V4H12.5C12.7652 4 13.0196 3.89464 13.2071 3.70711C13.3946 3.51957 13.5 3.26522 13.5 3V2C13.5 1.73478 13.3946 1.48043 13.2071 1.29289C13.0196 1.10536 12.7652 1 12.5 1H9C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0L6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1H1.5ZM4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5V12.5C5 12.6326 4.94732 12.7598 4.85355 12.8536C4.75979 12.9473 4.63261 13 4.5 13C4.36739 13 4.24021 12.9473 4.14645 12.8536C4.05268 12.7598 4 12.6326 4 12.5V5.5C4 5.36739 4.05268 5.24021 4.14645 5.14645C4.24021 5.05268 4.36739 5 4.5 5ZM7 5C7.13261 5 7.25979 5.05268 7.35355 5.14645C7.44732 5.24021 7.5 5.36739 7.5 5.5V12.5C7.5 12.6326 7.44732 12.7598 7.35355 12.8536C7.25979 12.9473 7.13261 13 7 13C6.86739 13 6.74021 12.9473 6.64645 12.8536C6.55268 12.7598 6.5 12.6326 6.5 12.5V5.5C6.5 5.36739 6.55268 5.24021 6.64645 5.14645C6.74021 5.05268 6.86739 5 7 5ZM10 5.5V12.5C10 12.6326 9.94732 12.7598 9.85355 12.8536C9.75979 12.9473 9.63261 13 9.5 13C9.36739 13 9.24021 12.9473 9.14645 12.8536C9.05268 12.7598 9 12.6326 9 12.5V5.5C9 5.36739 9.05268 5.24021 9.14645 5.14645C9.24021 5.05268 9.36739 5 9.5 5C9.63261 5 9.75979 5.05268 9.85355 5.14645C9.94732 5.24021 10 5.36739 10 5.5Z" fill="#DF4444" />
            </svg>
            <div className='two__container'></div>
         </div>
         <div className="level__document-first">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11.5556 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V4.44444L11.5556 0ZM3.55556 3.55556H8V5.33333H3.55556V3.55556ZM12.4444 12.4444H3.55556V10.6667H12.4444V12.4444ZM12.4444 8.88889H3.55556V7.11111H12.4444V8.88889ZM10.6667 5.33333V1.77778L14.2222 5.33333H10.6667Z" fill="#7890B2" />
            </svg>
            <svg width="12" height="1" viewBox="0 0 12 1" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line y1="0.5" x2="12" y2="0.5" stroke="#C6C6C6" />
            </svg>
         </div>
         <div className="level__document-second">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M11.5556 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V4.44444L11.5556 0ZM3.55556 3.55556H8V5.33333H3.55556V3.55556ZM12.4444 12.4444H3.55556V10.6667H12.4444V12.4444ZM12.4444 8.88889H3.55556V7.11111H12.4444V8.88889ZM10.6667 5.33333V1.77778L14.2222 5.33333H10.6667Z" fill="#7890B2" />
            </svg>
            <svg width="12" height="1" viewBox="0 0 12 1" fill="none" xmlns="http://www.w3.org/2000/svg">
               <line y1="0.5" x2="12" y2="0.5" stroke="#C6C6C6" />
            </svg>
         </div>
      </div >
   )
}

export default Level
