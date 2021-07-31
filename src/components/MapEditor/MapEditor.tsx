import React, { useCallback, useRef, useState } from 'react'
import { DrawPolygonMode, EditingMode, Editor } from 'react-map-gl-draw'
import { getEditHandleStyle, getFeatureStyle } from './style'
import CSS from 'csstype'

const buttonWrap: CSS.Properties = {
  position: 'fixed',
  top: '20px',
  right: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}

const MapEditor: React.FC = () => {
  const [mode, setMode] = useState<EditingMode | DrawPolygonMode | null>(null)
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState<
    number | null
  >(null)

  const editorRef = useRef<Editor>(null)

  const onSelect = useCallback((options) => {
    setSelectedFeatureIndex(options && options.selectedFeatureIndex)
  }, [])

  const onUpdate = useCallback(({ editType }) => {
    if (editType === 'addFeature') {
      setMode(new EditingMode())
    }
  }, [])

  const onDelete = useCallback(() => {
    if (selectedFeatureIndex !== null && selectedFeatureIndex >= 0) {
      editorRef.current &&
        editorRef.current.deleteFeatures(selectedFeatureIndex)
    }
  }, [selectedFeatureIndex])

  // if (editorRef.current) editorRef.current.addFeatures(myFeatures)

  return (
    <>
      <Editor
        ref={editorRef}
        style={{ width: '100%', height: '100%' }}
        clickRadius={12}
        mode={mode as any}
        onSelect={onSelect}
        onUpdate={onUpdate}
        editHandleShape={'circle'}
        featureStyle={getFeatureStyle}
        editHandleStyle={getEditHandleStyle}
        featuresDraggable={true}
      />
      <div style={buttonWrap}>
        <button onClick={() => setMode(new DrawPolygonMode())}>New poly</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  )
}

export default MapEditor