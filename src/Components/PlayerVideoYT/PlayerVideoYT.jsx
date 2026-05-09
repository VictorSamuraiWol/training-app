import "./PlayerVideoYT.css";
import { useOutletContext } from "react-router-dom";
import { useState, useRef, useCallback, useEffect } from "react";
import { MdDragIndicator } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { SlSizeFullscreen } from "react-icons/sl";

/* ── Drag hook ──────────────────────────────────────────────────────────── */
function useDrag(pos, setPos) {
  const isDragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)

  const onPointerDown = useCallback((e) => {
    e.preventDefault()

    isDragging.current = true
    setDragging(true)

    offset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y

    }

    const onMove = (ev) => {
      if (!isDragging.current) return

      const maxX = window.innerWidth - 380
      const maxY = window.innerHeight - 60

      setPos({
        x: Math.max(0, Math.min(maxX, ev.clientX - offset.current.x)),
        y: Math.max(0, Math.min(maxY, ev.clientY - offset.current.y))

      })

    }

    const onUp = () => {
      isDragging.current = false
      setDragging(false)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)

    }

    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)

    },

    [pos, setPos]

  )

  return { dragging, onPointerDown }

}

/* ── VideoPlayer ────────────────────────────────────────────────────────── */
function PlayerVideoYT({ videoSelected }) {

  const { visibleVideoYT, setVisibleVideoYT, initialPosVideo, setInitialPosVideo, 
    selectContainerVideoYTPosition
  } = useOutletContext()

  const { dragging, onPointerDown } = useDrag(initialPosVideo, setInitialPosVideo)

  const divRef = useRef(null)

  useEffect(() => {
    const rect = visibleVideoYT && divRef.current.getBoundingClientRect()

    setInitialPosVideo({ x: rect.x, y: rect.y })

  }, [visibleVideoYT, setInitialPosVideo]) 

  if (!visibleVideoYT) return null

  function videoResize(e) {
    const startX = e.clientX;
    const startY = e.clientY;
    const startW = divRef.current.offsetWidth
    const startH = divRef.current.offsetHeight

    const onMove = (e) => {
      divRef.current.style.width  = startW + (e.clientX - startX) + 'px'
      divRef.current.style.height = startH + (e.clientY - startY) + 'px'

    }

    const onUp = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)

    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)

  }

  return (
    <div
      ref={divRef}
      className={`${selectContainerVideoYTPosition} playerVideo${dragging ? " playerVideo--dragging" : ""}`}
      style={{ left: initialPosVideo.x, top: initialPosVideo.y }}

    >
      {/* ── Toolbar ── */}
      <div className="playerVideo__toolbar">
        {/* Drag handle */}
        <MdDragIndicator
          onPointerDown={onPointerDown} 
          className="playerVideo__icon playerVideo__icon--drag"
        />

        {/* Title */}
        <span className="playerVideo__title">{videoSelected.title}</span>

        {/* Close */}
        <TiDeleteOutline
          onClick={() => setVisibleVideoYT(false)}
          className="playerVideo__icon playerVideo__icon--close"
        />

      </div>

      {/* ── iFrame ── */}
      <div className="playerVideo__iframe-wrap">
        <iframe
          src={videoSelected.src}
          title={videoSelected.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>

      <SlSizeFullscreen
        onMouseDown={videoResize} 
        className="playerVideo__icon playerVideo__icon--resize" 
      />

    </div>

  )

}

export default PlayerVideoYT;
